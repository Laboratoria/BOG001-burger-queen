import swal from '@sweetalert/with-react';

const Alert = (titleInfo, iconAlert, message, toDo) => {
  swal({
    title: titleInfo,
    icon: iconAlert,
    buttons: ['No', 'Si'],
    dangerMode: true,
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
