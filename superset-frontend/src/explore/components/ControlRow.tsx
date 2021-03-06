/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';

const NUM_COLUMNS = 12;

type Control = React.ReactElement | null;

export default function ControlRow({ controls }: { controls: Control[] }) {
  // ColorMapControl renders null and should not be counted
  // in the columns number
  const countableControls = controls.filter(
    control => !['ColorMapControl'].includes(control?.props.type),
  );
  const colSize = NUM_COLUMNS / countableControls.length;
  return (
    <div className="row">
      {controls.map((control, i) => (
        <div
          className={`col-lg-${colSize} col-xs-12`}
          style={{
            display: control?.props.type === 'HiddenControl' ? 'none' : 'block',
          }}
          key={i}
        >
          {control}
        </div>
      ))}
    </div>
  );
}
