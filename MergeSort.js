function merge(leftArr, rightArr, array) {
  if (leftArr === undefined || rightArr === undefined || array === undefined) {
    return 0;
  }

  let leftSize = leftArr.length;
  let rightSize = rightArr.length;

  let i = 0,
    l = 0,
    r = 0; //index i , Left & Right

  while (l < leftSize && r < rightSize) {
    if (leftArr[l] < rightArr[r]) {
      array[i++] = leftArr[l++];
    } else {
      array[i++] = rightArr[r++];
    }
  }

  while (l < leftSize) {
    array[i] = leftArr[l];
    i++;
    l++;
  }
  while (r < rightSize) {
    array[i] = rightArr[r];
    i++;
    r++;
  }

  return array;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return { array }; // supaya konsisten sama return value
  }

  let middle = Math.floor(array.length / 2); // Rounding Keatas
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  //   For loop ini tidak dipakai karena diatas sudah memakai SLICE
  //   for (let i = 0, j = 0; i < array.length; i++) {
  //     if (i < middle) {
  //       left[i] = array[i];
  //     } else {
  //       right[j] = array[i];
  //       j++;
  //     }
  //   }

  // ✅ TANGKAP HASIL rekursi dan ambil .array-nya
  left = mergeSort(left).array;
  right = mergeSort(right).array;
  merge(left, right, array);

  //   return { left, right, middle, array };
  return { array };
}

console.log(mergeSort([3, 10, 5, 2, 9, 1, 17, 4, 8, 6, 24]));
console.log(mergeSort([4, 3, 2, 1, 6, 5, 7]));
