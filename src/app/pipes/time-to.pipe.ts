import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTo'
})
export class TimeToPipe implements PipeTransform {

  transform(startDate: string, endDate: string): string {
    console.log(startDate)
    console.log(endDate)
    let end = null;
    if (!endDate) {
      end = new Date();
    } else {
      end = new Date(endDate);
    }

    const start = new Date(startDate);
    let diffTime = end.getTime() - start.getTime();

    const msDay = (1000 * 60 * 60 * 24);
    const msMonth = 30 * msDay;
    const msYear = 365 * msDay;

    let diffString = '';
    const years = Math.floor(diffTime / msYear);
    if (years > 0) {
      diffTime = diffTime % msYear;
      diffString += `${years} años`;
    }

    const months = Math.floor(diffTime / msMonth);
    if (months > 0) {
      diffTime = diffTime % msMonth;
      diffString += ` ${months} meses`;
    }

    const days = Math.floor(diffTime / msDay);
    if (days > 0) {
      diffTime = diffTime % msDay;
      diffString += ` ${days} días`;
    }
    return diffString;
  }

}

