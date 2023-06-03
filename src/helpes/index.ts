import axios from 'axios';
import { createWriteStream } from 'fs';
import * as stream from 'stream';
import { promisify } from 'util';

const finished = promisify(stream.finished);

export async function downloadFile(
  fileUrl: string,
  outputLocationPath: string,
): Promise<any> {
  const writer = createWriteStream(outputLocationPath);
  return axios({
    method: 'GET',
    url: fileUrl,
    responseType: 'stream',
  }).then((response) => {
    response.data.pipe(writer);
    return finished(writer); //this is a Promise
  });
}

export const randomElement = (arr: any[]) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};
