export class Content {
  private readonly content: string

  get Vvlue() {
    return this.content
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content)

    console.log(isContentLengthValid)

    if (!isContentLengthValid) {
      throw new Error('Invalid content length.')
    }

    this.content = content
  }
}
