import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  @Input() placeholder: string;
  constructor() {
    this.placeholder = '';
  }

  ngOnInit(): void {
  }

}
