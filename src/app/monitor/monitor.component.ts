import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import { Observable } from "rxjs/index";
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  private modalTitle: string = 'Set the refresh cycle';
  private modalRef;
  private settingsForm;
  private results: Observable<any>;

  constructor(
    private firebaseService: FirebaseService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.results = this.firebaseService.getData('sensor/result');

    this.settingsForm = this.formBuilder.group({
      refresh: this.formBuilder.control('')
    });
  }

  open(settingsModal){
    this.modalRef = this.modalService.open(settingsModal, { size: 'lg' });
  }

  closeSettings() {
    this.modalRef.close();

    let refreshObject = {
      'refresh': this.settingsForm.controls['refresh'].value
    };

    this.firebaseService.saveData('sensor', refreshObject);
  }
}
