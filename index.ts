//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num: number[];
let i, j, s: number;
num = [];
j = 0;
for (i = 0; i < 5; i++) {
  num[i] = parseInt(prompt('numero'));
  j = j + num[i];
}
s = j / num.length;
for (i = 0; i < num.length; i++) {
  if (num.length >= s) {
    console.log(num[i]);
  }
}
