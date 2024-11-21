const searchParams2 = new URLSearchParams(window.location.search);

const refer = searchParams2.get("refer") || null;

if (refer === "octopus") {
    const octopusReferLink = document.getElementById("octopusReferLink");

    setTimeout(() => {
        octopusReferLink.click();
    }, 1000);
}

if (refer === "monzo") {
    const monzoReferLink = document.getElementById("monzoReferLink");

    setTimeout(() => {
        monzoReferLink.click();
    }, 1000);
}
