import { describe, expect, it, vi } from "vitest";
import {
  div,
  first,
  getChuckNorrisPhase,
  getPersonInfo,
  isEven,
  multiply,
  phrase,
  teachers,
  today,
} from "../src/ejercicio";

describe("Conjunto de test del ejercicio.js", () => {
  it("Cuando multiplico 2 x 3 tiene que dar 6", () => {
    const r = multiply(2, 3);
    expect(r).toBe(6)
  });

  it("Cuando multiplico 2 x 3 no tiene que dar 0", () => {
    const r = multiply(2, 3);
    expect(r).not.toBe(0)
  });

  it("Cuando multiplico 2 x 3 tengo que obtener un valor positivo o cero", () => {
    const r = multiply(2, 3);
    expect(r).toBeGreaterThanOrEqual(0)
  });

  it("Cuando divido 2 entre 3 tiene que dar más o menos 0.666. Precisión de 2 decimales", () => {
    const r = div(2,3)
    expect(r).toBeCloseTo(0.666, 2)
  });

  it("Cuando divido 6 entre 0 tiene lanzar una excepción 'No se puede dividir por 0' ", () => {
    expect( ()=>div(6,0) ).toThrowError('No se puede dividir por 0')
  });

  it("Al llamar a la función first. El primer elemento de la lista ['juan', 'pedro', 'ivan'] debe ser 'juan'", () => {
   const r = first(['juan', 'pedro', 'ivan'])
   expect(r).toBe('juan')
  });

  it("La llamada a la función first, deberá devolver algo truthy", () => {
    const r = first(['juan', 'pedro', 'ivan'])
    expect(r).toBeTruthy()
    //const r2 = first([])
    //expect(r2).toBeTruthy()
  });

  it("Al llamar a la función first. El primer elemento de la lista ['juan', 'pedro', 'ivan'] tiene que ser de tipo string", () => {
    const r = first(['juan', 'pedro', 'ivan'])
    expect(r).toBeTypeOf('string')
  });

  it("La llamada a la función teachers debe devolver una array de longitud 3", () => {
    const r = teachers();
    expect(r).toBeTypeOf("object")
    expect(r).toHaveLength(3)
  });

  it("La llamada a la función teachers debe contener al profe 'Angel'", () => {
    const r = teachers();
    expect(r).toContain('Angel')
  });

  it("La llamada a la función isEven debe retornar algo. Usa un espía", () => {
    const isEvenSpy = vi.fn(isEven) 
    const r = isEvenSpy(2)
    expect(r).toBe(true)
    expect(isEvenSpy).toHaveReturned()
  });

  it("La llamada a la función phrase debe devolver algo que comineza por 'Ha' y termina por '!'. Usa una regex ", () => {
    const r = phrase()
    expect(r).toMatch(/^Ha.*!$/)
  });

  it.skip("Sáltate este test para que nos se ejecute.", () => {
    expect(true).toBe(true);
  });

  it("La función teachers debe devolver un valor distinto de undefined", () => {
    const r = teachers()
    expect(r).toBeDefined()
  });

  it("La llamada a la función today deberá devolver una instancia de Date", () => {
    const r = today()
    expect(r).toBeInstanceOf(Date)
  });

  it("La llamada a la función getPersonInfo debe devolver un objeto con la propiedad 'age'", () => {
    const r = getPersonInfo()
    expect(r).toHaveProperty('age')
  });

  it("La llamada a la función getPersonInfo debe devolver un objeto con la propiedad name = 'Juan", () => {
    const r = getPersonInfo()
    expect(r).toEqual(
      expect.objectContaining({name:'Juan'})
    )
  });

  it("La llamada a la función asincrona getChuckNorrisPhase, debe devolver un objeto con la propiedad 'value'", async () => {
    await expect(getChuckNorrisPhase()).resolves.toHaveProperty('value')
  });
});
