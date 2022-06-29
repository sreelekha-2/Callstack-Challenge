function listener1() {
  setTimeout(() => console.log('#1 Hello from timeout 1'), 0);
  Promise.resolve().then(() => console.log('#1 Hello from promise 1'));
  const promise = Promise.resolve();
  setTimeout(() => console.log('#1 Hello from timeout 2'), 0);
  console.log('#1 Hello from main thread');
  setTimeout(
    () => promise.then(() => console.log('#1 Hello from promise 2')),
    0
  );
}

function listener2() {
  setTimeout(() => console.log('#2 Hello from timeout 1'), 0);
  Promise.resolve().then(() => console.log('#2 Hello from promise 1'));
  const promise = Promise.resolve();
  setTimeout(() => console.log('#2 Hello from timeout 2'), 0);
  console.log('#2 Hello from main thread');
  setTimeout(
    () => promise.then(() => console.log('#2 Hello from promise 2')),
    0
  );
}

const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', listener1, false);

btn1.addEventListener('click', listener2, false);

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => btn1.click(), false);
