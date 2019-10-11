import { Injectable, Service } from "@tsed/common";

@Service()
export class HomeService {
    private readonly homeUrls: string[] = [];

    create(url: string) {
        this.homeUrls.push(url);
    }

    findAll(): string[] {
        return this.homeUrls;
    }
}