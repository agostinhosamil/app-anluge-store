import { compare, hash } from 'bcryptjs'
import { noEmpty } from '~/utils'

export class Hash {
  /**
   * create a password hash using bcrypt
   */
  static async make(password: string, hashSalt: number = 8): Promise<string> {
    const passwordHash = await hash(password, hashSalt)

    return passwordHash
  }

  /**
   * compare two hashes
   */
  static async compare(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    if (noEmpty(password) && noEmpty(passwordHash)) {
      const passwordMatchesHash = await compare(password, passwordHash)

      return passwordMatchesHash
    }

    return false
  }
}
