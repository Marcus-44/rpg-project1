/**
 * Copyright 2024 Marcus-44
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { WiredButton, WiredInput } from "wired-elements";
import "@haxtheweb/rpg-character/rpg-character.js";




/**
 * `rpg-project`
 * 
 * @demo index.html
 * @element rpg-project
 */
export class RpgProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "rpg-project";
  }

  constructor() {
    super();
    this.button = false;
    this.title = "Design Your Character";
    this.height = 0;
    this.width = 0;
    this.accessories = 0;
    this.base = 0;
    this.face = 0;
    this.faceItem = 0;
    this.hair = 0;
    this.pants = 0;
    this.shirt = 0;
    this.skin = 0;
    this.seed = null;
    this.walking = false;
    this.hat = 0;
    this.hatColor = 0;
    this.fire = false;
    
    
    
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/rpg-project.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      button: { type: String },
      height: { type: Number },
      width: { type: Number },
      base: { type: Number },
      face: { type: Number },
      faceItem: { type: Number },
      hair: { type: Number },
      pants: { type: Number },
      shirt: { type: Number },
      skin: { type: Number },
      hatColor: { type: Number },
      hat: { type: Number },
      seed: { type: String, reflect: true },
      fire: { type: Boolean, reflect: true },
      walking: { type: Boolean, reflect: true },
      accessories: { type: Number },




    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--rpg-project-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.title}</span></h3>
  <wired-button>Wired Button!</wired-button>
  <wired-button elevation="3">Elevation</wired-button>
</div>
<wired-button>Click me</wired-button>
`;

  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(RpgProject.tag, RpgProject);