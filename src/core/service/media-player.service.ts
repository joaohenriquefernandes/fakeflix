import { PrismaService } from '@src/persistence/prisma/prisma.service';

export class MediaPlayerService {
  constructor(private readonly prismaService: PrismaService) {}

  async prepareStreaming(videoId: string) {
    const video = await this.prismaService.video.findUnique({
      where: {
        id: videoId,
      },
    });
    return video;
  }
}
