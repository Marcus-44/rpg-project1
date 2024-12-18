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
    this.seed = '';
    this.walking = false;
    this.hat = 0;
    this.hatColor = 0;
    this.fire = false;
    this.circle = false;
    
    
    
    
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
      base: { type: Number },
      face: { type: Number },
      faceItem: { type: Number },
      hair: { type: Number },
      pants: { type: Number },
      shirt: { type: Number },
      skin: { type: Number },
      hatColor: { type: Number },
      hat: { type: Number },
      seed: { type: String },
      fire: { type: Boolean, reflect: true },
      walking: { type: Boolean, reflect: true },
      circle: { type: Boolean, reflect: true },
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

      wired-item {
        opacity: 1;
      }

      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        display: infline-flex;
        
      }
      h3 span {
        font-size: var(--rpg-project-label-font-size, var(--ddd-font-size-s));
      }

      .input {
        margin-left: var(--ddd-spacing-2);
      }

      .control-panel {
        background: var(---ddd-theme-default-blue);
        padding: var(--ddd-spacing-4);
        width: 300px;
        justify-content: center;
      }

      .share {
        margin-top: var(--ddd-spacing-4);
      }


    `];
  }

  validHat(hat) {
    const validHats = ['none', 'bunny'];
    return validHats.includes(hat);
  }

  inputChange(property, event) {
    if (event.target.tagName.toLowerCase() === 'wired-checkbox') {
      this[property] = event.target.checked;
    } else if (property === 'base') {
      const value = event.detail.selected;
      this[property] = value === "5" ? 5 : 1;
      this.requestUpdate();
    } else if (property === 'hat') {
      this[property] = event.detail.selected;
    } else if (event.detail?.selected !== undefined) {
      this[property] = Number(event.detail.selected);
    } else {
      this[property] = Number(event.target.value);
    }
  }

  generateSeed() {
    this.seed = `${this.accessories}${this.base}${this.face}${this.faceItem}${this.hair}${this.pants}${this.shirt}${this.skin}${this.hatColor}0`;
    
  }



  async shareURL() {
    const URL = window.location.href;
    try {
      await navigator.clipboard.writeText(URL);
      alert('Link copied!');
    } catch (error) {
      alert('Share: ' + URL);
    }
    
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.title}</span></h3>
  <rpg-character 
    ?fire="${this.fire}"
    ?walking="${this.walking}"
    accessories="${this.accessories}"
    base="${this.base}"
    face="${this.face}"
    faceItem="${this.faceItem}"
    hair="${this.hair}"
    pants="${this.pants}"
    shirt="${this.shirt}"
    skin="${this.skin}"
    hat="${this.hat}"
    hatColor="${this.hatColor}"
    height="300"
    width="300"
    ></rpg-character>


<div>Seed: ${this.seed}</div>

<div class="control-panel">
  <div class="input">
    <label>Character Option</label>
    <wired-combo id="base" .value="${this.base}" @selected="${(e) => this.inputChange('base', e)}">
      <wired-item value="1">Male</wired-item>
      <wired-item value="5">Female</wired-item>
    </wired-combo>
  </div>
  
  <div class="input">
    <label for="accessories">Accessories</label>
    <wired-slider id="accessories" min="0" max="9" .value="${this.accessories}" @change="${(e) => this.inputChange('accessories', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Shirt</label>
    <wired-slider id="shirt" min="0" max="9" .value="${this.shirt}" @change="${(e) => this.inputChange('shirt', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Pants</label>
    <wired-slider id="pants" min="0" max="9" .value="${this.pants}" @change="${(e) => this.inputChange('pants', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Skin Tone</label>
    <wired-slider id="skin" min="0" max="9" .value="${this.skin}" @change="${(e) => this.inputChange('skin', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Hair Style</label>
    <wired-slider id="hair" min="0" max="9" .value="${this.hair}" @change="${(e) => this.inputchange('hair', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Face</label>
    <wired-slider id="face" min="0" max="5" .value="${this.face}" @change="${(e) => this.inputChange('face', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Face Item</label>
    <wired-slider id="faceItem" min="0" max="9" .value="${this.faceItem}" @change="${(e) => this.inputChange('faceItem', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Hat Color</label>
    <wired-slider id="hatColor" min="0" max="9" .value="${this.hatColor}" @change="${(e) => this.inputChange('hatColor', e)}"></wired-slider>
  </div>

  <div class="input">
    <label>Hat Type</label>
    <wired-combo id="hat" .value="${this.hat}" @selected="${(e) => this.inputchange('hat', e)}">
      <wired-item value="none">None</wired-item>
      <wired-item value="bunny">Bunny</wired-item>
      <wired-item value="coffee">Coffee</wired-item>
      <wired-item value="construction">Construction</wired-item>
      <wired-item value="cowboy">Cowboy</wired-item>
      <wired-item value="education">Education</wired-item>
      <wired-item value="knight">Knight</wired-item>
      <wired-item value="ninja">Ninja</wired-item>
      <wired-item value="party">Party</wired-item>
      <wired-item value="pirate">Pirate</wired-item>
      <wired-item value="watermelon">Watermelon</wired-item>
    </wired-combo>
  </div>


</div>
</div>

<div class="input">
    <wired-checkbox ?checked="${this.fire}" @change="${(e) => this.inputChange('fire', e)}">Fire</wired-checkbox>
</div>

<div class="input">
    <wired-checkbox ?checked="${this.walking}" @change="${(e) => this.inputChange('walking', e)}">Walking</wired-checkbox>
</div>

<div class="input">
    <wired-checkbox ?checked="${this.circle}" @change="${(e) => this.inputChange('circle', e)}">Circle</wired-checkbox>
</div>

<wired-button class="share" @click="${this.shareURL}">Share Your Character!</wired-button>

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