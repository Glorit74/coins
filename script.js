const data = [
  {
    title: 'US Dollar',
    sub: '$',
    text: 'USD',
  },
  {
    title: 'Euro',
    sub: '€',
    text: 'EUR',
  },
  {
    title: 'Chinese Yuan',
    sub: '¥',
    text: 'CNY',
  },
  {
    title: 'Thai Baht',
    sub: '฿',
    text: 'THB',
  },
  {
    title: 'British Pound Sterling',
    sub: '£',
    text: 'GBP',
  },
  {
    title: 'Ghanaian Cedi',
    sub: '₵',
    text: 'GHS',
  },
  {
    title: 'Japanese Yen',
    sub: '￥',
    text: 'JPY',
  },
  {
    title: 'Polish Zloty',
    sub: 'zł',
    text: 'PLN',
  },
];

function loadEvent() {
  for (let i = 0; i < data.length; i++) {
    let element = `  
	
      <section class="card">
            
	  <div class="sub">${data[i].sub}</div>
            <h2>${data[i].title}</h2>
            <p>${data[i].text}</p>
            <button><div class="text">Save</div> <span class="material-icons">
east
</span></button>
        </section>
        `;
    document.getElementById('root').insertAdjacentHTML('beforeend', element);
  }
}

window.addEventListener('load', loadEvent);
