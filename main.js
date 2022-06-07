import './style.css'
import './quote.css'
import Alpine from 'alpinejs'
import LoveCounter from './love-counter'
import persist from '@alpinejs/persist'
import * as fun from 'everyday-fun';
import Quotes from './quotes';

Alpine.data('quoteApp', Quotes)
 
window.Alpine = Alpine
Alpine.plugin(persist)
Alpine.data('loveCounter', LoveCounter);

Alpine.start()

Alpine.data('quoteApp', function(){
	return {
		init(){
			this.quote = fun.getRandomQuote()
		},
		quote : {}
	}
})

document.querySelector('#app').innerHTML = "I 💚 Alpine JS!"
  
