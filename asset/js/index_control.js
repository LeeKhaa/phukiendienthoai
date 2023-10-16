let CapSac = document.getElementById('Cáp_Sạc');
let OpLung = document.getElementById('Ốp_Lưng');
let MiengDan = document.getElementById('Miếng_Dán');
let Gimbal = document.getElementById('Gimbal');
let Earphone = document.getElementById('Earphone');

Cáp_Sạc.onclick = function () {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
Ốp_Lưng.onclick = function () {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
Miếng_Dán.onclick = function () {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
Gimbal.onclick = function () {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
Earphone.onclick = function () {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}