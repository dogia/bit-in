export const environment = {
  production: true,
  URLs: {
    usuarios:{
      login: '//apibitwanv1.tk/public/login',
      verPorId: '//apibitwanv1.tk/public/users/viewbyid',
      crear: '//apibitwanv1.tk/public/users/create',
      editar: '//apibitwanv1.tk/public/users/edit',
      cambiarPassword: '//apibitwanv1.tk/public/users/changepassword'
    },
    publicaciones: {
      verPorId: '//apibitwanv1.tk/public/posts/viewbyid',
      verPorUsuarioId: '//apibitwanv1.tk/public/posts/viewbyiduser',
      crear: '//apibitwanv1.tk/public/posts/create',
      editar: '//apibitwanv1.tk/public/posts/edit',
      eliminar: '//apibitwanv1.tk/public/posts/delete'
    },
    comentarios: {
      verPorPostId: '//apibitwanv1.tk/public/comments/viewbyidpost',
      crear: '//apibitwanv1.tk/public/comments/create',
      eliminar: '//apibitwanv1.tk/public/comments/delete'
    },
    uploads: '//apibitwanv1.tk/public/uploads'
  }
};
