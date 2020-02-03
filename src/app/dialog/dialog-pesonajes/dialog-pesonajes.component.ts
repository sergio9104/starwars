import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-pesonajes',
  templateUrl: './dialog-pesonajes.component.html',
  styleUrls: ['./dialog-pesonajes.component.scss']
})
export class DialogPesonajesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogPesonajesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

  ngOnInit() {
    
  }

}
