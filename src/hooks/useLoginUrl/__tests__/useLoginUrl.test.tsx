import { renderHook, cleanup } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useLoginUrl from '..';
import * as utils from '@site/src/utils';

jest
  .spyOn(utils, 'getServerConfig')
  .mockReturnValue({ appId: '1234', serverUrl: 'test.binary.sx' });

describe('Use Login URL', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('Should return login url for english language by default ', () => {
    const { result } = renderHook(() => useLoginUrl());

    let loginUrl: string;
    act(() => {
      loginUrl = result.current.getUrl();
    });

    expect(loginUrl).toContain('l=en');
    expect(utils.getServerConfig).toHaveBeenCalled();
    expect(loginUrl).toMatch(/https:\/\/test.binary.sx/);
    expect(loginUrl).toMatch(/app_id=1234/);
  });

  it('Should return login url for spanish language correctly', () => {
    const { result } = renderHook(() => useLoginUrl());

    let loginUrl: string;
    act(() => {
      loginUrl = result.current.getUrl('es');
    });

    expect(loginUrl).toContain('l=es');
    expect(utils.getServerConfig).toHaveBeenCalled();
    expect(loginUrl).toMatch(/https:\/\/test.binary.sx/);
    expect(loginUrl).toMatch(/app_id=1234/);
  });
});