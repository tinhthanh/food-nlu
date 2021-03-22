export default class AudioTouchUnlock {

  private static audioRequestCaching: { [url: string]: any } = {};
  private static soundQueue: string[] = [];
  private static intervalId: number;

  public static onInit() {
    let isSupportAudioContext: boolean = !!((<any>window).AudioContext || (<any>window).webkitAudioContext);
    if (isSupportAudioContext) {
      let context: AudioContext = new ((<any>window).AudioContext || (<any>window).webkitAudioContext)();
      this.touchUnlock(context).then(() => {
        AudioTouchUnlock.listenToPlaySound(context);
      });
    } else {
      AudioTouchUnlock.listenToPlaySound();
    }
  }

  public static onDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  public static play(url: string): void {
    AudioTouchUnlock.soundQueue.push(url);
  }

  private static listenToPlaySound(context?: AudioContext): void {
    let isSoundPlaying: boolean = false;
    this.intervalId = window.setInterval(() => {
      if (!isSoundPlaying) {
        isSoundPlaying = true;
        let url = AudioTouchUnlock.soundQueue.shift();
        if (url) {
          if (context) {
            AudioTouchUnlock.playAudio(url, context)
                .then(() => isSoundPlaying = false)
                .catch(() => isSoundPlaying = false);
          } else {
            AudioTouchUnlock.playAudioDefaultConfig(url)
                .then(() => isSoundPlaying = false)
                .catch(() => isSoundPlaying = false);
          }
        } else {
          isSoundPlaying = false;
        }
      }
    }, 500);
  }

  private static playAudio(url: string, context: AudioContext): Promise<boolean> {

    let play = (audioData: any): Promise<boolean> => {
      return new Promise<boolean>((resolve, reject) => {
        let source = context.createBufferSource();

        context.decodeAudioData(audioData.slice(0), (buffer: AudioBuffer) => {
          source.buffer = buffer;
          source.loop = false;
          source.onended = () => resolve(true);
          source.connect(context.destination);
          source.start();

          let timeout = setTimeout(() => {
            clearTimeout(timeout);
            resolve(true);
          }, 2000);

        }, (e) => reject(e));
      });
    };

    return new Promise<boolean>((resolve, reject) => {
      if (!context || !(context instanceof ((<any>window).AudioContext || (<any>window).webkitAudioContext))) {
        reject('AudioTouchUnlock: You need to pass an instance of AudioContext to this method call');
      } else {
        if (this.audioRequestCaching[url]) {
          play(this.audioRequestCaching[url])
              .then((re) => resolve(re))
              .catch((e) => reject(e));
        } else {
          let request = new XMLHttpRequest();
          request.open('GET', url, true);
          request.responseType = 'arraybuffer';
          request.onload = () => {
            this.audioRequestCaching[url] = request.response;
            play(request.response)
                .then((re) => resolve(re))
                .catch((e) => reject(e));
          };
          request.send();
        }
      }
    });
  }

  private static playAudioDefaultConfig(url: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      let audio = new Audio(url);
      audio.onended = () => resolve(true);
      audio.play();
      let timeout = setTimeout(() => {
        clearTimeout(timeout);
        resolve(true);
      }, 2000);
    });
  }

  private static touchUnlock(context: AudioContext): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (!context || !(context instanceof ((<any>window).AudioContext || (<any>window).webkitAudioContext))) {
        reject('AudioTouchUnlock: You need to pass an instance of AudioContext to this method call');
      } else {
        if (context.state === 'suspended' && 'ontouchstart' in window) {
          let unlock = () => {
            context.resume().then(() => {
                  document.body.removeEventListener('touchstart', unlock);
                  document.body.removeEventListener('touchend', unlock);
                  if (window.parent) {
                    window.parent.document.body.removeEventListener('touchstart', unlock);
                    window.parent.document.body.removeEventListener('touchend', unlock);
                  }

                  resolve(true);
                },
                (reason) => {
                  reject(reason);
                }
            );
          };

          document.body.addEventListener('touchstart', unlock, false);
          document.body.addEventListener('touchend', unlock, false);
          if (window.parent) {
            window.parent.document.body.addEventListener('touchstart', unlock, false);
            window.parent.document.body.addEventListener('touchend', unlock, false);
          }
        } else {
          resolve(false);
        }
      }
    });
  }

}
