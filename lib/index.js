"use strict";

function newQuote() {

  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteBlock').innerHTML = quotes[randomNumber];
}

var quotes = ["“In the midst of migrants in search of a better life there are people in need of protection: refugees and asylum-seekers, women and children victims of trafficking…Many move simply to avoid dying of hunger. When leaving is not an option but a necessity, this is more than poverty.” » Antonio Guterres", "'Displaced societies are of value. Their issues are our issues.' Cynthia Basinet", "“I urge you to celebrate the extraordinary courage and contributions of refugees past and present..” » Kofi Annan, UN Secretary-General", "\"Wherever there is a human being, there is an opportunity for a kindness.\" -Lucius Annaeus Seneca", "'So often the world sits idly by, watching ethnic conflicts flare up, as if these were mere entertainment rather than human beings whose lives are being destroyed. Shouldn't the existence of even one single refugee be a cause for alarm throughout the world?'-- Urkhan Alakbarov"];