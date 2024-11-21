const searchParams = new URLSearchParams(window.location.search);

const amount = searchParams.get("amount") || null;
const ref = searchParams.get("ref") || null;

const monzoLink = document.getElementById("monzoLink");
const paypalLink = document.getElementById("paypalLink");

if (amount) {
    monzoLink.href += amount;
    paypalLink.href += amount;
}

if (ref) {
    monzoLink.href += `?d=${ref}`;
    paypalLink.href += `?d=${ref}`;
}
