function removeFromArray(array, deleteItem) {
  for(var i = 0; i < array.length; i++){
    if(a[i] == deleteItem)
      array.splice(i,1);
  }
  console.log(array);
}

a=[1,2,3,4,5,6,7,8,9,0,3,10,3,6,3];
removeFromArray(a,3);