import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-app')
export class App extends LitElement {
  render() {
    return html`
    <div class="container mx-auto">
       <h1>Hello from lit</h1>
    </div>
`;
  }
}
