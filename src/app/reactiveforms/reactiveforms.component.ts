import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public submitForm() {
    console.log(this.cadastroForm.value.firstName)
    console.log(this.cadastroForm.value.lastName)
  }

}
