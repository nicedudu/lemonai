import { useRequest as useRequestHook } from 'ahooks';
import { CombineService, BaseOptions, BaseResult } from '@ahooksjs/use-request/es/types';
import { message } from 'antd';

type IResponse = {
    code: number;
    data: any;
    msg: string;
};

type IExpandOptions = {
    captureError?: boolean;
    captureSuccess?: boolean;
    successMsg?: string;
    errorMsg?: string;
};

export default function useRequest<R = any, P extends any[] = any>(
    service: CombineService<R, P>,
    options?: BaseOptions<R, P> & IExpandOptions
): BaseResult<R, P> {
    if (typeof service !== 'function') {
        throw new TypeError('service must be a function!');
    } else {
        return useRequestHook(service, {
            throwOnError: true,
            ...options,
            formatResult: (res: IResponse) => {
                const { captureSuccess, captureError, successMsg, errorMsg } = options || {};
                const { code, data, msg } = res;
                if (code === 10000) {
                    if (captureSuccess) {
                        message.success(successMsg || msg);
                    }
                    return data;
                }
                if (captureError) {
                    message.error(errorMsg || msg);
                }
                return null;
            }
        });
    }
}
