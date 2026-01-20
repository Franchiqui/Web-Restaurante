#!/usr/bin/env node

/**
 * start-pocketbase.js
 * 
 * Script de ayuda para iniciar PocketBase dentro de los proyectos generados.
 * - Busca el ejecutable dentro de la carpeta "pocket-base"
 * - Lanza "pocketbase serve" heredando stdin/stdout
 * - No modifica datos ni estructura, solo arranca el servidor
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const pocketBaseDir = path.join(process.cwd(), 'pocket-base');
const executableName = process.platform === 'win32' ? 'pocketbase.exe' : 'pocketbase';
const executablePath = path.join(pocketBaseDir, executableName);

if (!fs.existsSync(executablePath)) {
  console.error('❌ No se encontró el ejecutable de PocketBase en:', executablePath);
  console.error('Asegúrate de haber ejecutado primero el script de instalación de PocketBase.');
  process.exit(1);
}

console.log('🚀 Iniciando PocketBase desde:', executablePath);

const child = spawn(executablePath, ['serve', '--http=0.0.0.0:8090'], {
  cwd: pocketBaseDir,
  stdio: 'inherit',
});

child.on('exit', (code) => {
  console.log('PocketBase finalizó con código:', code);
  process.exit(code ?? 0);
});
