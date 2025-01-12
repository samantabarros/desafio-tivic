import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarOperacaoComponent } from './adicionar-operacao.component';

describe('AdicionarOperacaoComponent', () => {
  let component: AdicionarOperacaoComponent;
  let fixture: ComponentFixture<AdicionarOperacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarOperacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
