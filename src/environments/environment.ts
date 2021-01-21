// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  applicantcode: 461589,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
