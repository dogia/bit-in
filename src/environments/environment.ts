// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  applicantcode: 461589,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
