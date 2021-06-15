import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import  {HttpClientTestingModule} from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it ('#clicked() should toggle #isOn',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const comp=fixture.componentInstance;
    expect(comp.message).toBe(false,'off at first');
    comp.onClick();
    expect(comp.message).toBe(true, 'on after click');
    comp.onClick();
    expect(comp.message).toBe(false,'off after second click');

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'class'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('class');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('class app is running!');
  });
  
});

