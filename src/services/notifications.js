import Noty from 'noty';

export default class NotificationService{
    success(message){
        (new Noty({
            text:message,
            type:'success',
            timeout: 1000
        })).show();
    }
    error(message){
        (new Noty({
            text:message,
            type:'error',
            timeout: 1000
        })).show();
    }
}
