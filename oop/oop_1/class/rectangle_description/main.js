class hinhCn {
    chieudai;
    chieurong;

    constructor(chieudai, chieurong) {
        this.chieudai = chieudai;
        this.chieurong = chieurong;
    }

    getChieudai() {
        return this.chieudai;
    }

    getChieurong() {
        return this.chieurong;
    }

    getChuvi() {
        return (this.chieudai + this.chieurong) * 2;
    }

    getDientich() {
        return this.chieudai * this.chieurong
    }

    setChieudai(chieudai) {
        this.chieudai = chieudai;
    }

    setChieurong(chieurong) {
        this.chieurong = chieurong;
    }
}