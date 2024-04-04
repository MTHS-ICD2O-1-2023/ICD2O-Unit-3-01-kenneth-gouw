// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function findAreaClicked() {
  const base1Input = parseInt(document.getElementById("base1-entered").value)
  const base2Input = parseInt(document.getElementById("base2-entered").value)
  const heightInput = parseInt(document.getElementById("height-entered").value)
  const area = ((base1Input * base2Input) / 2) * heightInput
  document.getElementById("answer").innerHTML = "The area is: " + area.toFixed(2) + " mm<sup>2"
}
