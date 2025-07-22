//console.log('tariffs ok3');

const tariffsMarkup = {
	overlay: async function () {

		let overlayClasses = [
			'tariffs-overlay',
			'active-tab-ru'
		];

		await (async () => {
			const d = await chrome.storage.local.get(
				[
					"used_trial",
				]
			);
			if (d.used_trial) {
				overlayClasses.push('used-trial')
			}
			return d;
		})();

		return `
<div class="${overlayClasses.join(' ')}">
	<div class="tariffs-overlay__content">
        <div class="tariffs-overlay__logo"></div>
        <div class="tariffs-overlay__tab-buttons">
            <div class="tariffs-overlay__tab-button tab-ru" data-tab="ru">Российская карта</div>
            <div class="tariffs-overlay__tab-button tab-foreign" data-tab="foreign">Иностранная карта</div>
        </div>
        <div class="tariffs-overlay__cards cards-ru" data-gate="ru">
            <div class="tariffs-overlay__card" data-period="trial">
                <div class="period">Пробный период — 3 дня</div>
                <div class="price">0 ₽</div>
                <div class="info">Требуется валидация карты. 1 рубль спишется и вернется в течение нескольких минут.</div>
                <div class="note">Ранее примененную карту нельзя использовать повторно для активации пробного периода.</div>
                <div class="button">Получить доступ</div>
            </div>
            <div class="tariffs-overlay__card" data-period="1">
                <div class="period">1 месяц</div>
                <div class="price">750 ₽</div>
                <label class="info checkbox-field">
                    <span class="checkbox">
                        <input type="checkbox" name="auto_payment">
                    </span>
                    Подключить регулярный платеж
                </label>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
            <div class="tariffs-overlay__card" data-period="3">
                <div class="period">3 месяца</div>
                <div class="price">2250 ₽</div>
                <div class="info">Без автоматического списания</div>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
            <div class="tariffs-overlay__card" data-period="6">
                <div class="period">6 месяцев</div>
                <div class="price">4500 ₽</div>
                <div class="info">Без автоматического списания</div>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
            <div class="tariffs-overlay__card" data-period="12">
                <div class="period">12 месяцев</div>
                <div class="price">9000 ₽</div>
                <div class="info">Без автоматического списания</div>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
        </div>
        <div class="tariffs-overlay__cards cards-foreign" data-gate="foreign">
            <div class="tariffs-overlay__card" data-period="1">
                <div class="period">1 месяц</div>
                <div class="price">850 ₽</div>
                <label class="info checkbox-field">
                    <span class="checkbox">
                        <input type="checkbox" name="auto_payment">
                    </span>
                    Подключить регулярный платеж
                </label>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
            <div class="tariffs-overlay__card" data-period="3">
                <div class="period">3 месяца</div>
                <div class="price">2550 ₽</div>
                <div class="info">Без автоматического списания</div>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
            <div class="tariffs-overlay__card" data-period="6">
                <div class="period">6 есяцев</div>
                <div class="price">5100 ₽</div>
                <div class="info">Без автоматического списания</div>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
            <div class="tariffs-overlay__card" data-period="12">
                <div class="period">12 месяцев</div>
                <div class="price">10 200 ₽</div>
                <div class="info">Без автоматического списания</div>
                <div class="note"></div>
                <div class="button">Активировать</div>
            </div>
        </div>
        <div class="tariffs-overlay__bottom">
            <div class="tariffs-overlay__promocode">
                <div class="form">
                    <input type="text" class="code" name="code" placeholder="Введите промокод" />
                    <div class="button">
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 7.14634L1 13" stroke="white" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="error"></div>
            </div>
            <div class="tariffs-overlay__note">* В случае ошибки в активации подписки отключите VPN и <a target="_blank" href="https://chromewebstore.google.com/detail/annexx/nlgfplihjpoagjkcnmfiefhhbpfeibch">обновите версию расширения</a></div>
        </div>
        <div class="tariffs-overlay__close"></div>
        <div class="tariffs-overlay__error-modal">
            <div class="tariffs-overlay__error">
                <div class="tariffs-overlay__error-message">Возникла ошибка.<br/>Попробуйте позже или напишите в техподдержку</div>
                <div class="tariffs-overlay__error-close"></div>
            </div>
        </div>
    </div>
	<div class="tariffs-overlay__ajax_loader">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="210"
			 height="210" style="shape-rendering: auto; display: block; background: transparent;"
			 xmlns:xlink="http://www.w3.org/1999/xlink">
			<g>
				<g transform="rotate(0 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.4774305555555555s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(30 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.43402777777777773s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(60 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.39062499999999994s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(90 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.34722222222222215s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(120 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.3038194444444444s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(150 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.26041666666666663s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(180 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.21701388888888887s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(210 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.17361111111111108s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(240 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.13020833333333331s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(270 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.08680555555555554s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(300 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="-0.04340277777777777s" dur="0.5208333333333333s"
								 keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
					</rect>
				</g>
				<g transform="rotate(330 50 50)">
					<rect fill="#ffffff" height="14" width="4" ry="4.34" rx="2" y="19" x="48">
						<animate repeatCount="indefinite" begin="0s" dur="0.5208333333333333s" keyTimes="0;1" values="1;0"
								 attributeName="opacity"></animate>
					</rect>
				</g>
				<g></g>
			</g><!-- [ldio] generated by https://loading.io -->
		</svg>
	</div>
</div>
	`;
	},
	overlayCSS: function () {
		return `
<style>
    .tariffs-overlay {
        display: none;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 999999;
    }

    .tariffs-overlay * {
        box-sizing: border-box;
    }

    .tariffs-overlay__shown .tariffs-overlay {
        display: flex;
    }

    .tariffs-overlay__error-modal {
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .tariffs-overlay__has-error .tariffs-overlay__error-modal {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.7);
    }

    .tariffs-overlay__error {
        position: relative;
        display: flex;
        flex-direction: column;
        background: linear-gradient(138deg, #9d64fa 0%, #ff7451 100%);
        border-radius: 10px;
        padding: 100px 70px 88px;
        color: #fff;
        font-family: "TildaSans Medium", sans-serif;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.02em;
        align-items: center;
        text-align: center;
    }

    /*.tariffs-overlay__has-error .tariffs-overlay__error {*/
    /*    display: flex;*/
    /*}*/

    .tariffs-overlay__error-close {
        position: absolute;
        top: 35px;
        right: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 51px;
        width: 51px;
        border: 1px solid rgba(255, 255, 255, 0.31);
        border-radius: 10px;
        cursor: pointer;
    }

    .tariffs-overlay__error-close:after {
        display: block;
        height: 12px;
        width: 12px;
        background: url(${chrome.runtime.getURL('popup/img/close.svg')}) center no-repeat;
        background-size: cover;
        content: '';
        transition: 0.3s;
    }

    .tariffs-overlay__error-close:hover:after {
        transform: rotate(180deg);
    }

    .tariffs-overlay__ajax_loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        opacity: 0;
    }

    body.loading .tariffs-overlay__ajax_loader {
        opacity: 1;
    }

    .tariffs-overlay__ajax_loader svg {
        height: 75%;
    }

    /*.tariffs-overlay__ajax_loader svg rect {*/
    /*  fill: #000000;*/
    /*}*/

    .tariffs-overlay__close {
        position: absolute;
        top: 35px;
        right: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 51px;
        width: 51px;
        border: 1px solid rgba(255, 255, 255, 0.31);
        border-radius: 10px;
        cursor: pointer;
    }

    .tariffs-overlay__close:after {
        display: block;
        height: 12px;
        width: 12px;
        background: url(${chrome.runtime.getURL('popup/img/close.svg')}) center no-repeat;
        background-size: cover;
        content: '';
        transition: 0.3s;
    }

    .tariffs-overlay__close:hover:after {
        transform: rotate(180deg);
    }

    .tariffs-overlay__logo {
        display: none;
        width: 65px;
        height: 21px;
        background: url(${chrome.runtime.getURL('popup/img/logo.svg')}) center no-repeat;
        background-size: contain;
    }

    .tariffs-overlay__content {
        position: relative;
        display: flex;
        flex-direction: column;
        /*width: 1422px;*/
        /*height: 749px;*/
        /*background: #7686d9;*/
        border-radius: 10px;
        padding: 50px 70px 88px;
        color: #fff;
        font-family: "TildaSans Medium", sans-serif;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.02em;
        background: linear-gradient(138deg, #9d64fa 0%, #ff7451 100%);
    }

    body.loading .tariffs-overlay__content {
        pointer-events: none;
    }

    body.loading .tariffs-overlay__content:after {
        background: rgba(0,0,0,0.7);
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
    }

    .tariffs-overlay__content .button {
        width: fit-content;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 42px;
        border: 0;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: #ffffff;
        background: #FFA38C;
        border-radius: 10px;
        padding: 0 28px;
    }

    button[disabled] {
        opacity: 0.6;
    }

    .button.disabled {
        opacity: 0.6;
    }

    .tariffs-overlay__content label.checkbox-field {
        position: relative;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        gap: 8px;
        cursor: pointer;
    }

    .tariffs-overlay__content label.checkbox-field .checkbox {
        display: flex;
        flex-shrink: 0;
        position: relative;
        width: 13px;
        height: 13px;
        /*padding: 3px;*/
        border-radius: unset;
        overflow: hidden;
    }

    .tariffs-overlay__content label.checkbox-field input[type="checkbox"] {
        width: 0;
        height: 0;
        /*visibility: hidden;*/
    }

    .tariffs-overlay__content label.checkbox-field input[type="checkbox"]:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border: 1px solid #B4B4B4;
        background-color: transparent;
        /*box-sizing: border-box;*/
        /*cursor: pointer;*/
    }

    .tariffs-overlay__content label.checkbox-field input[type="checkbox"]:checked:after {
        border-color: #FF7451;
        background: #FF7451 url(${chrome.runtime.getURL('popup/img/check-mark.svg')}) center no-repeat;
        background-size: 9px;
    }

    .horizontal-shaking {
        animation: horizontal-shaking 0.33s 1;
    }

    @keyframes horizontal-shaking {
        0% { transform: translateX(0) }
        25% { transform: translateX(5px) }
        50% { transform: translateX(-5px) }
        75% { transform: translateX(5px) }
        100% { transform: translateX(0) }
    }

    .tariffs-overlay__tab-buttons {
        display: flex;
        gap: 10px;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.31);
        background: rgba(255, 255, 255, 0.1);
        height: 48px;
        width: fit-content;
        font-weight: 500;
        font-size: 17px;
    }

    .tariffs-overlay__tab-button {
        cursor: pointer;
        width: 222px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active-tab-ru .tariffs-overlay__tab-button.tab-ru,
    .active-tab-foreign .tariffs-overlay__tab-button.tab-foreign {
        border-radius: 10px;
        background: #000000  ;
    }

    .tariffs-overlay__cards {
        display: none;
        flex-grow: 1;
        align-items: flex-start;
        gap: 10px;
        padding: 34px 0 60px;
        /*padding: 62px 0 60px;*/
    }

    .active-tab-ru .tariffs-overlay__cards.cards-ru {
        display: flex;
    }

    .active-tab-foreign .tariffs-overlay__cards.cards-foreign {
        display: flex;
    }

    .tariffs-overlay__card {
        width: 236px;
        border-radius: 10px;
        padding: 20px;
        background: #ffffff;
        color: #242424;
        font-family: 'TildaSans',Arial,sans-serif;
        font-size: 18px;
        font-weight: 400;
    }

    .tariffs-overlay__card[data-period="trial"] {
        width: 299px;
    }

    .used-trial .tariffs-overlay__card[data-period="trial"] {
        display: none;
    }

    .tariffs-overlay__card .period {
        width: fit-content;
        padding: 5px 9px;
        border: 1px solid rgba(0, 0, 0, 0.11);
        border-radius: 10px;
        color: #454545;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 27px;
    }

    .tariffs-overlay__card .price {
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: -0.01em;
        margin-bottom: 25px;
    }

    .tariffs-overlay__card .info {
    }

    .tariffs-overlay__card .info .checkbox {
        margin-top: 4px;
    }

    .tariffs-overlay__card .note {
        margin-top: 30px;
        position: relative;
        border: 1px solid #ff552a;
        border-radius: 10px;
        padding: 12px 28px;
        font-size: 16px;
    }

    .tariffs-overlay__card .note:empty {
        display: none;
    }

    .tariffs-overlay__card .note:before {
        position: absolute;
        left: -8px;
        top: calc(50% - 7px);
        width: 15px;
        height: 15px;
        content: '';
        background: url(${chrome.runtime.getURL('popup/img/note-icon.svg')}) center no-repeat;
        background-size: cover;
    }

    .tariffs-overlay__card .button {
        margin-top: 40px;
    }

    .tariffs-overlay__card[data-period="trial"] .button {
        margin-top: 32px;
    }

    .tariffs-overlay__bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .tariffs-overlay__promocode {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .tariffs-overlay__promocode .form {
        display: flex;
        gap: 8px;
        width: 305px;
        padding: 5px 5px 5px 20px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.31);
    }

    .tariffs-overlay__promocode .form.has-error {
        border: 1px solid #FF7451;
        background: #ffffff;
    }

    .tariffs-overlay__promocode .error {
    }

    .tariffs-overlay__promocode .error:empty {
        display: none;
    }

    .tariffs-overlay__promocode .code {
        background: none;
        outline: none;
        border: none;
        width: 100%;
        /*height: 45px;*/
        font-family: inherit;
        font-weight: 500;
        font-size: inherit;
        color: #fff;
    }

    .tariffs-overlay__promocode .has-error .code {
        color: #FF7451;
    }

    .tariffs-overlay__promocode .code::placeholder {
        color: #fff;
        opacity: 0.56;
    }

    .tariffs-overlay__promocode .has-error .code::placeholder {
        color: #FF7451;
    }

    .tariffs-overlay__promocode .button {
        width: 37px;
        height: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        flex-shrink: 0;
    }

    .tariffs-overlay__note {
        opacity: 0.6;
        width: 414px;
        font-weight: 500;
    }

    .tariffs-overlay__note a {
        color: inherit;
        font-weight: inherit;
    }
</style>
	`;
	}
}

function showOverlay() {
	document.body.style.top = `-${window.scrollY}px`;
	document.body.style.position = 'fixed';
	document.querySelector('body').classList.add('tariffs-overlay__shown');
}
function hideOverlay() {
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
	document.querySelector('body').classList.remove('tariffs-overlay__shown');
}
function resetOverlayContent() {
	(async () => {
		document.body.insertAdjacentHTML(
			"beforeend",
			await tariffsMarkup.overlay()
		);
		tariffsOverlay = document.querySelector('.tariffs-overlay');
		tariffsOverlay
			.querySelector('.tariffs-overlay__close')
			.addEventListener('click', function (e) {
				hideOverlay();
			});
		let tabButtons = tariffsOverlay.querySelectorAll('.tariffs-overlay__tab-button');
		for (let i = 0; i < tabButtons.length; i++) {
			tabButtons[i].addEventListener('click', function (e) {
				tariffsOverlay.classList.remove(...[
					'active-tab-ru',
					'active-tab-foreign'
				])
				const button = this;
				const tab = button.dataset.tab;
				tariffsOverlay.classList.add(`active-tab-${tab}`);
			});
		}
		let cards = tariffsOverlay.querySelectorAll('.tariffs-overlay__card .button');
		for (let i = 0; i < cards.length; i++) {
			cards[i].addEventListener('click', function (e) {
				//console.log('.tariffs-overlay__card .button click');
				const card = this.closest('.tariffs-overlay__card');
				const cardsWrapper = this.closest('.tariffs-overlay__cards');
				const period = card.dataset.period;
				const gate = cardsWrapper.dataset.gate;
				const autoPaymentCheckbox = cardsWrapper.dataset.gate;
				let subscriptionParam = autoPaymentCheckbox.checked ? '&product=subscription' : '';
				let gateParam = `&gate=${gate}`;
				document.body.classList.add('loading');

				chrome.storage.local.get("auth_token", function (d) {

					fetch(`https://user.annexx.cc/api/payment?period=${period}${gateParam}${subscriptionParam}`, {
						headers: {
							Authorization: `Bearer ${d.auth_token}`
						},
						method: "GET"
					})
						.then(async response => {
							document.body.classList.remove('loading');
							let json = await response.json();
							return response.ok ? json : Promise.reject(json);
						})
						.then(paymentLink => {
							//console.log('success', paymentLink);
							hideOverlay();
							tariffsOverlay.remove();
							tariffsOverlay = document.querySelector('.tariffs-overlay');
							window.open(paymentLink, "_blank").focus();
						}, json => {
							showErrorModal();
							console.log('error', json);
						})
						.catch(error => {
							document.body.classList.remove('loading');
							showErrorModal();
							console.log('catch', error)
						});
				});
			});
		}
		tariffsOverlay
			.querySelector('.tariffs-overlay__promocode .button')
			.addEventListener('click', function (e) {
				const block = this.closest('.tariffs-overlay__promocode');
				const code = block.querySelector('.code').value.trim();
				const form = block.querySelector('.form');
				const formData = new FormData();

				if (!code) {
					form.classList.add(...[
						'has-error',
						'horizontal-shaking'
					]);
					setTimeout(function () {
						form.classList.remove('horizontal-shaking');
					}, 1000);
					return;
				}

				document.body.classList.add('loading');
				formData.append('code', code);

				chrome.storage.local.get("auth_token", function (d) {
					fetch("https://user.annexx.cc/api/access-code/use", {
						headers: {
							'Authorization': `Bearer ${d.auth_token}`
						},
						body: formData,
						method: "POST"
					})
						.then(async response => {
							document.body.classList.remove('loading');
							let json = await response.json();
							return response.ok ? json : Promise.reject(json);
						})
						.then(json => {
							//console.log('success', json);
							form.replaceWith('Промокод успешно применен');
							chrome.storage.local.set({
								expire_time: json.expire_time
							});
						}, json => {
							form.classList.add(...[
								'has-error',
								'horizontal-shaking'
							]);
							setTimeout(function () {
								form.classList.remove('horizontal-shaking');
							}, 1000);
							console.log('error', json);
						})
						.catch(error => {
							document.body.classList.remove('loading');
							showErrorModal();
							console.log('catch', error)
						});
				});
		});
		if (!tariffsOverlay.classList.contains('used-trial')) {
			let tariffsOverlayContent = tariffsOverlay.querySelector('.tariffs-overlay__content');
			tariffsOverlayContent.style.width = `${tariffsOverlayContent.clientWidth}px`;
			tariffsOverlayContent.style.height = `${tariffsOverlayContent.clientHeight}px`;
		}
	})();
}

let tariffsOverlay = document.querySelector('.tariffs-overlay');

function showErrorModal() {
	if (tariffsOverlay) {
		tariffsOverlay
			.querySelector('.tariffs-overlay__error-close')
			.addEventListener('click', hideErrorModal);
		tariffsOverlay.classList.add("tariffs-overlay__has-error");
	}
}

function hideErrorModal() {
	tariffsOverlay
		.querySelector('.tariffs-overlay__error-close')
		.removeEventListener('click', hideErrorModal);
	tariffsOverlay.classList.remove("tariffs-overlay__has-error");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	let response = {
		message: ''
	};
	if (request.action === "openTariffs") {
		if (window === window.top) {
			if (!document.getElementById('tariffs-overlay-css')) {
				document.head.insertAdjacentHTML(
					"beforeend",
					tariffsMarkup.overlayCSS()
				);
			}
			if (!tariffsOverlay) {
				resetOverlayContent();
			}
		}
		showOverlay();
	}
	sendResponse(response);
});
