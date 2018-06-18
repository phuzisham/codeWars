function toCamelCase(str){
str = str.replace(/[\W_]/g, ' ').split(' ');

for (var i = 1; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
return str.join('');
}
