export class AppService{
    static appThemes:{dark:string, light:string}={light:'light-theme', dark:'dark-theme'};
    currentTheme:string = AppService.appThemes.light;
}