import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  questionForm = this.formBuilder.group({
    answer: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  answer() {
    const answer = this.questionForm.value.answer!.toString();
    this.router.navigateByUrl(answer);
  }
}
