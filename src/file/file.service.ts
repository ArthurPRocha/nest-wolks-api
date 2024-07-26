import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
  async uploadPhoto(file: Express.Multer.File) {
    const id = uuidv4();
    const path = join(__dirname, '..', '..', 'storage', 'photos', `${id}.png`);

    await writeFile(path, file.buffer);
    const message = 'Foto salva com sucesso!';
    return { message };
  }
}
