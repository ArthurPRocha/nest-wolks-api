import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDTO } from './dto/create-car.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdatePutCarDTO } from './dto/update-put-car.dto';
import { UpdatePatchCarDTO } from './dto/update-patch-car.dto';

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    { model, year, price, info, image_url }: CreateCarDTO,
    userId: string,
  ) {
    try {
      const carExist = await this.prisma.car.count({
        where: { model },
      });

      if (carExist) {
        throw new BadRequestException('Carro já existe.');
      }
      return this.prisma.car.create({
        data: {
          model,
          info,
          price,
          year,
          image_url,
          user: { connect: { id: userId } },
        },
      });
    } catch (error) {
      console.error('Erro ao criar o carro:', error);
      throw new BadRequestException(`Erro ao criar o carro: ${error.message}`);
    }
  }

  async list() {
    return this.prisma.car.findMany();
  }

  async show(id: string) {
    await this.exists(id);
    return this.prisma.car.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    data: UpdatePutCarDTO,
  ) {
    await this.exists(id);

    return this.prisma.car.update({
      data,
      where: {
        id,
      },
    });
  }

  async updatePartial(id: string, data: UpdatePatchCarDTO) {
    await this.exists(id);
    return this.prisma.car.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    await this.exists(id);
    return this.prisma.car.delete({
      where: {
        id,
      },
    });
  }

  async exists(id: string) {
    if (
      !(await this.prisma.car.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException('Carro não encontrado!');
    }
  }
}
