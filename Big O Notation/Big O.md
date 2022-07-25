###Big O 표기법

- 여러가지 코드를 비교하고 좋은 방법을 찾을 수 있음
- 코드의 성능을 이야기 할 때 필요함
- 비효율적인 코드를 찾는데 효율적

```js
function add(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
