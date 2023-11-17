import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.minLength(3), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public submitForm() {
    if(this.cadastroForm.valid) {
      console.log(this.cadastroForm.value.firstName)
      console.log(this.cadastroForm.value.lastName)
      console.log(this.cadastroForm.value.email)
    }

  }

}
