export function getEventModalMarkup(data) {
  const { images } = data;
  console.log(data.images);
  return `
  <div class="modal__header">
      <img
        class="modal__img"
        src="${images}"
        alt="The Black Eyed Peas"
        height="132px"
      />
    </div>
    <div class="modal__mainPart">
      <div class="modal__big-img">
        <img
          class="modal__imgBig"
          src="https://strana.today/img/article/2105/79_main.jpeg"
          alt="The Black Eyed Peas"
          height="326px"
        />
      </div>
      <div class="modal__right-text">
        <div>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">
            Atlas Weekend is the largest music festival in Ukraine.More than 200
            artists will create a proper music festival atmosphere on 10 stages
          </p>
        </div>
        <div>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">2021-06-09 20:00 (Kyiv/Ukraine)</p>
        </div>
        <div>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">Kyiv, Ukraine VDNH</p>
        </div>
      </div>
    </div>
    <div class="modal__bottomText">
      <h2 class="modal__title">WHO</h2>
      <p class="modal__text">The Black Eyed Peas</p>
      <div class="modal__priceSection">
        <h2 class="modal__title">PRICES</h2>
        <div class="modal__priceAndBtn">
          <div>
            <p class="modal__text">Standart 300-500 UAH</p>
            <div class="modal__buyTicketsBtn">
              <button class="modal__btnBlue" type="button">BUY TICKETS</button>
            </div>
          </div>
          <div class="modal__vipPrice">
            <p class="modal__text">VIP 1000-1500 UAH</p>
            <div class="modal__buyTicketsBtn">
              <button class="modal__btnBlue" type="button">BUY TICKETS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal__lastBtn">
      <button class="modal__btnAuthor" type="button">
        MORE FROM THIS AUTHOR
      </button>
    </div>`;
}
