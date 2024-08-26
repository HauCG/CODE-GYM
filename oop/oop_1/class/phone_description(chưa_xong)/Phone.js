class Phone {
    name;
    battery;
    typingMailMemory;
    gettingMailMemory;
    draftMessage;
    sendMess;
    inbox;
    isOn;

    // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
    // Có chức năng bật và tắt điện thoại.
    // Có chức năng xạc pin điện thoại.
    // Có chức năng soạn tin nhắn.
    // Có chức năng nhận tin nhắn từ một chiếc mobile khác.

    // Có chức năng gửi tin nhắn tới một chiếc mobile khác.
    // Có chức năng xem tin trong hộp thư đến.
    // Có chức năng xem tin đã gửi.

    // Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
    // Các chức năng không thể hoạt động nếu điện thoại chưa bật.
    constructor(name) {
        this.battery = 0;
        this.typingMailMemory = "";
        this.gettingMailMemory = [];
        this.sendMess = [];
        this.inbox = [];
        draftMessage = [];
        this.isOn = false;
    }

    checkOnOf() {
        return this.isOn ? "Tắt" : "Bật";
    }
    onPhone() {
        this.isOn = true;
    }
    offPhone() {
        this.isOn = false;
    }
    reChangerPhone() {
        this.battery = 100;
    }
    typingMailMemory(message) {
        this.typingMailMemory = message;
        this.battery --;
    }
    receiveMessage(message) {
        this.inbox.push(message);
        this.battery--;
    }

    sendMessage(receiver) {
        if (this.isOn && this.battery > 0) {
            receiver.receiveMessage(this.draftMessage);
            this.sendMessage.push(this.draftMessage);
            this.draftMessage = "";
            this.battery--;
        }
    }
















}
