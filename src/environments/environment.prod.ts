export const environment = {
  production: true,
  URLs: {
    usuarios:{
      login: 'http://apibitwanv1.tk/public/login',
      verPorId: 'http://apibitwanv1.tk/public/users/viewbyid',
      crear: 'http://apibitwanv1.tk/public/users/create',
      editar: 'http://apibitwanv1.tk/public/users/edit',
      cambiarPassword: 'http://apibitwanv1.tk/public/users/changepassword'
    },
    publicaciones: {
      verPorId: 'http://apibitwanv1.tk/public/posts/viewbyid',
      verPorUsuarioId: 'http://apibitwanv1.tk/public/posts/viewbyiduser',
      crear: 'http://apibitwanv1.tk/public/posts/create',
      editar: 'http://apibitwanv1.tk/public/posts/edit',
      eliminar: 'http://apibitwanv1.tk/public/posts/delete'
    },
    comentarios: {
      verPorPostId: 'http://apibitwanv1.tk/public/comments/viewbyidpost',
      crear: 'http://apibitwanv1.tk/public/comments/create',
      eliminar: 'http://apibitwanv1.tk/public/comments/delete'
    },
    uploads: 'http://apibitwanv1.tk/public/uploads'
  }
};
