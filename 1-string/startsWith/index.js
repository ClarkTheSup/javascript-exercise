export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(e => e.match('^(粤A).*')).length;
}
