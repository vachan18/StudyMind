/**
 * StudyMind Pro - Automated Test Suite
 * Validates DOM architecture, React 18 integration, Chart.js dependencies,
 * theme toggling variables, and local persistence hooks.
 */

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

describe('StudyMind Pro Web Architecture Verification', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist in repository root');
  const content = fs.readFileSync(htmlPath, 'utf8');

  test('Document structure conforms to HTML5 standards', () => {
    assert.match(content, /<!DOCTYPE\s+html>/i, 'HTML5 DOCTYPE must be declared');
    assert.match(content, /<meta\s+charset=["']?utf-8["']?/i, 'UTF-8 charset must be declared');
    assert.match(content, /<meta\s+name=["']viewport["']/i, 'Viewport must be defined for mobile responsiveness');
    assert.match(content, /<title>.*StudyMind.*<\/title>/i, 'Page title must reflect StudyMind');
  });

  test('Core CDN dependencies are loaded correctly', () => {
    assert.match(content, /react@18/i, 'React 18 CDN script must be linked');
    assert.match(content, /react-dom@18/i, 'ReactDOM 18 CDN script must be linked');
    assert.match(content, /chart(\.umd)?(\.min)?\.js/i, 'Chart.js dependency must be linked');
  });

  test('Mounting container and layout elements exist', () => {
    assert.ok(
      content.includes('id="root"') || content.includes("id='root'"),
      'React root container (#root) must exist for app mounting'
    );
  });

  test('Dark and light theme CSS tokens are defined', () => {
    assert.ok(content.includes(':root'), ':root CSS token definitions must be present');
    assert.ok(content.includes('[data-theme=dark]'), 'Dark theme token overrides must be defined');
    assert.ok(content.includes('--ink'), '--ink token must be configured');
    assert.ok(content.includes('--paper'), '--paper token must be configured');
  });

  test('Typography and design font imports are configured', () => {
    assert.ok(
      content.includes('Space+Grotesk') || content.includes('Sora'),
      'Web typography fonts (Space Grotesk / Sora) must be imported'
    );
  });

  test('Interactive modules and persistence hooks are present in scripts', () => {
    const requiredKeywords = [
      'localStorage',
      'useState',
      'useEffect'
    ];
    for (const kw of requiredKeywords) {
      assert.ok(
        content.includes(kw),
        `Script must utilize React hook or storage mechanism: ${kw}`
      );
    }
  });
});
