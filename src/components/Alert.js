import swal from '@sweetalert/with-react';
import './Alert.scss'

const Alert = (titleInfo, iconAlert, dangerMode, message, toDo) => {
  swal({
    title: titleInfo,
    icon: iconAlert,
    buttons: ['No', 'Si'],
    dangerMode: dangerMode,
  }).then((willDelete) => {
    if (willDelete) {
      swal(message, {
        icon: 'success',
      });
      toDo()
    }
  });
};

export default Alert;
