import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-wefinex',
  templateUrl: './wefinex.component.html',
  styleUrls: ['./wefinex.component.scss'],
})
export class WefinexComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  ngAfterViewInit(): void {
      const modeSwitch = this.document.querySelector('.mode-switch');
      modeSwitch.addEventListener('click', () => {
        this.document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
      });
      const listView = this.document.querySelector('.list-view');
      const gridView = this.document.querySelector('.grid-view');
      const projectsList = this.document.querySelector('.project-boxes');
      listView.addEventListener('click', () => {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
      });
      gridView.addEventListener('click', () => {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
      });
      this.document.querySelector('.messages-btn').addEventListener('click', () => {
        this.document.querySelector('.messages-section').classList.add('show');
      });
      this.document.querySelector('.messages-close').addEventListener('click', ()  => {
        this.document.querySelector('.messages-section').classList.remove('show');
      });
  }

  ngOnInit() {}

}
